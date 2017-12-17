import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class HorizontalSlider extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { slides, style, width, height } = this.props;
    console.log(width, height)

    if (!height) {
      return null;
    }

    return (
      <div data-horizontal-slider='true' className='fullpage-react-horizontal-slider' style={style}>
        {slides.map((sl, i) => {
          const givenSlideStyles = sl.props.style || {};
          const key = sl.props.key || `horizontal-slide-${i}`;

          return React.cloneElement(sl, {
            key,
            style: {
              ...givenSlideStyles,
              width,
              height
            }
          });
        })}
      </div>
    )
  }
}
HorizontalSlider.propTypes = {
  style: PropTypes.object,
  slides: PropTypes.array.isRequired
}
export default HorizontalSlider;
