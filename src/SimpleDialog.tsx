import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { SimpleItem } from './interfaces/ItemsResponse';
import { DialogContent, DialogContentText } from '@mui/material';
import Image from 'next/image';

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  item: SimpleItem;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{props.item.title} {`(${props.item.releaseYear})`}</DialogTitle>
      <DialogContent>
        <DialogContentText color="secondary" id="alert-dialog-description">
          {props.item.description}
        </DialogContentText>
        <Image alt="Picture of the author" src={props.item.images['Poster Art'].url} width={props.item.images['Poster Art'].width} height={props.item.images['Poster Art'].height} />
      </DialogContent>
    </Dialog>
  );
}
