// @flow
import * as React from 'react';
import AttachmentIcon from './AttachmentIcon';

type Props = {|
  handleFiles: (Blob[]) => mixed,
  multiple: boolean,
  children: React.Node,
|};

/**
 * Component is described here.
 *
 * @example ./examples/FileUploadButton.md
 */
export default class FileUploadButton extends React.PureComponent<Props> {
  static defaultProps = {
    multiple: false,
    children: <AttachmentIcon />,
  };

  render() {
    return (
      <div className="rfu-file-upload-button">
        <label>
          <input
            type="file"
            className="rfu-file-input"
            onChange={(event) => {
              this.props.handleFiles(event.currentTarget.files);
            }}
            multiple={this.props.multiple}
          />
          {this.props.children}
        </label>
      </div>
    );
  }
}
