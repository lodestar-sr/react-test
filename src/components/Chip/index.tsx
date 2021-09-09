import React from 'react';
import { makeStyles } from "@material-ui/core";
import { common, green, grey, pink, red } from "@material-ui/core/colors";
import MuiChip from '@material-ui/core/Chip';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  pink: {
    background: pink[500],
  },
  green: {
    background: green[500],
  },
  red: {
    background: red[500],
  },
  gray: {
    background: grey[500]
  },
  black: {
    background: common.black,
  },
  chip: {
    color: common.white,
  },
}));

interface ChipProps {
  label: string;
  color: string;
}

const Chip = ({ label, color }: ChipProps) => {
  const classes = useStyles();

  return (
    <MuiChip label={label} className={clsx(classes.chip, (classes as any)[color])} />
  );
};

export default Chip;
