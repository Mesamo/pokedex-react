import React, { FC, useState } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import Grow from '@material-ui/core/Grow';

const styles = createStyles({
  form: {
    display: 'flex',
    justifyContent: 'center',
    height: 66
  },
  searchField: {
    width: '100%',
    maxWidth: '500px',
    padding: '0 16px'
  },
  searchInput: {
    fontSize: '25px'
  },
  box: {
    display: 'inherit'
  },
  button: {
    padding: '8px'
  },
  divider: {
    width: '1px',
    height: '28px',
    margin: '6px 4px 4px 4px',
  }
});

interface SearchProps extends WithStyles<typeof styles> {
  onSearch?: (value: string) => void
}

const Search: FC<SearchProps> = props => {
  const { classes, onSearch } = props;

  const [searchValue, setSearchValue] = useState('');

  const handleSearch: React.FormEventHandler = event => {
    event.preventDefault();
    onSearch && onSearch(searchValue)
  };

  const handleClear: React.MouseEventHandler = event => {
    event.preventDefault();
    setSearchValue('');
  }

  const onSearchValueChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const clearBtn = (
    <Grow in={true}>
      <div className={classes.box}>
        <Tooltip title="Clear" placement="top">
          <IconButton className={classes.button} onClick={handleClear} aria-label="Clear">
            <ClearIcon />
          </IconButton>
        </Tooltip>
        <Divider className={classes.divider} />
      </div>
    </Grow>
  )

  const searchBtn = (
    <Tooltip title="Search" placement="top-end">
      <IconButton className={classes.button} type="Submit" aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Tooltip>
  )

  return (
    <form className={classes.form} onSubmit={handleSearch}>
      <TextField
        className={classes.searchField}
        placeholder="Search"
        margin="normal"
        value={searchValue}
        onChange={onSearchValueChange}
        InputProps={{
          classes: { input: classes.searchInput },
          endAdornment: (
            <InputAdornment position="end">
              {searchValue ? clearBtn : ''}
              {searchBtn}
            </InputAdornment>
          )
        }}
      />
    </form>
  );
};

export default withStyles(styles)(Search);
