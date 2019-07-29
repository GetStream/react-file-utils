// @flow

import React from 'react';
import IconButton from './IconButton';
import placeholder from '../images/placeholder-generic.png';

import loadImage from 'blueimp-load-image';

export type Props = {|
  handleClose?: (id?: string) => mixed,
  size: number,
  image: string,
  id?: string,
|};

export type State = {|
  imgSrc?: any,
|};

/**
 * Component is described here.
 *
 * @example ./examples/Thumbnail.md
 */
export default class Thumbnail extends React.PureComponent<Props, State> {
  static defaultProps = {
    size: 100,
    // image: placeholder,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      imgSrc: null,
    };
  }

  componentDidMount() {
    this._processImage();
  }

  componentDidUpdate(prevProps: Props) {
    const { imgSrc } = this.state;
    const { image } = this.props;
    if (!imgSrc && prevProps.image !== image) {
      this._processImage();
    }
  }

  _handleClose = () => {
    if (this.props.handleClose) {
      this.props.handleClose(this.props.id);
    }
  };

  _processImage = () => {
    const { image } = this.props;

    loadImage(
      image,
      (img) => {
        const base64data = img.toDataURL('image/jpeg');
        this.setState({
          imgSrc: base64data,
        });
      },
      { orientation: true, crossOrigin: true },
    );
  };

  render() {
    const { handleClose, size } = this.props;
    const svg =
      '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M465 5c5.53 0 10 4.47 10 10s-4.47 10-10 10-10-4.47-10-10 4.47-10 10-10zm3.59 5L465 13.59 461.41 10 460 11.41l3.59 3.59-3.59 3.59 1.41 1.41 3.59-3.59 3.59 3.59 1.41-1.41-3.59-3.59 3.59-3.59-1.41-1.41z" id="b"/><filter x="-30%" y="-30%" width="160%" height="160%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/></filter></defs><g transform="translate(-451 -1)" fill-rule="nonzero" fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#b"/></g></svg>';

    return (
      <div
        className="rfu-thumbnail__wrapper"
        style={{ width: size, height: size }}
      >
        <div className="rfu-thumbnail__overlay">
          {handleClose ? (
            <IconButton onClick={this._handleClose}>
              <div dangerouslySetInnerHTML={{ __html: svg }} />
            </IconButton>
          ) : null}
        </div>
        <img
          src={this.state.imgSrc || placeholder}
          className="rfu-thumbnail__image"
          alt=""
        />
      </div>
    );
  }
}
