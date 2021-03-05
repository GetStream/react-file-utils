// @flow
import * as React from 'react';
import AttachmentIcon from './AttachmentIcon';

type Props = {|
  handleFiles: (Blob[]) => mixed,
  multiple: boolean,
  children: React.Node,
  disabled: boolean,
  accepts?: string | string[],
|};

/**
 * Component is described here.
 *
 * @example ./examples/FileUploadButton.md
 */
export default class FileUploadButton extends React.PureComponent<Props> {
  inputRef: ?HTMLInputElement;
  static defaultProps = {
    multiple: false,
    children: <AttachmentIcon />,
    disabled: false,
  };

  render() {
    let className = 'rfu-file-upload-button';
    if (this.props.disabled) {
      className = `${className} rfu-file-upload-button--disabled`;
    }
    return (
      <div className={className}>
        <label>
          <input
            type="file"
            ref={(ref) => (this.inputRef = ref)}
            className="rfu-file-input"
            onChange={(event) => {
              this.props.handleFiles(event.currentTarget.files);
              if (this.inputRef !== null && this.inputRef !== undefined) {
                this.inputRef.value = '';
                this.inputRef.blur();
              }
            }}
            multiple={this.props.multiple}
            disabled={this.props.disabled}
            accept={
              this.props.accepts && typeof this.props.accepts === 'object'
                ? this.props.accepts.join(',')
                : this.props.accepts
            }
          />
          {this.props.children}
        </label>
      </div>
    );
  }
}
