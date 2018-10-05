import PropTypes from 'prop-types';

export const ShapeOfBlock = PropTypes.shape({
    ID: PropTypes.string,
    timestamp: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
        PropTypes.number,
    ]),
});
export const shapeOfBlockchainItem = PropTypes.shape({
    ID: PropTypes.string,
    name: PropTypes.string,
    blocks: PropTypes.arrayOf(ShapeOfBlock),
});
