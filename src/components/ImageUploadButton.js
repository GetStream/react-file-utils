// @flow
import * as React from 'react';
import PictureIcon from './PictureIcon';

type Props = {|
  handleFiles: (File[]) => mixed,
  multiple: boolean,
  disabled: boolean,
  children: React.Node,
|};

/**
 * Component is described here.
 *
 * @example ./examples/ImageUploadButton.md
 */
export default class ImageUploadButton extends React.PureComponent<Props> {
  static defaultProps = {
    multiple: false,
    disabled: false,
    children: <PictureIcon />,
  };
  render() {
    return (
      <div className="rfu-image-upload-button">
        <label>
          <input
            type="file"
            className="rfu-image-input"
            onChange={(event) => {
              this.props.handleFiles(event.currentTarget.files);
            }}
            accept="image/*"
            multiple={this.props.multiple}
            disabled={this.props.disabled}
          />
          {this.props.children}
        </label>
      </div>
    );
  }
}
