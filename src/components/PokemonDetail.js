import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const styles = {

}

const PokemonDetail = props => {
  const { open, handleClose } = props;
  return (
    <Modal open={open} onClose={handleClose}>
      <div>
        test
      </div>
    </Modal>
  )
}

PokemonDetail.defaultProps = {
  open: false,
  handleClose: () => {}
}

PokemonDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default memo(withStyles(styles)(PokemonDetail));
