import React, { memo, FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

const styles = createStyles({});

interface PokemonDetailProps extends WithStyles<typeof styles> {

  /**
   * If true, the detail is open
   *
   * @type {boolean}
   * @memberof PokemonDetailProps
   */
  open: boolean;

  /**
   * Callback function when detail closed
   *
   * @memberof PokemonDetailProps
   */
  handleClose: () => void
}

const PokemonDetail: FC<PokemonDetailProps> = props => {
  const { open, handleClose } = props;
  return (
    <Modal open={open} onClose={handleClose}>
      <div>test</div>
    </Modal>
  );
};

PokemonDetail.defaultProps = {
  open: false,
  handleClose: () => {}
};

export default memo(withStyles(styles)(PokemonDetail));
