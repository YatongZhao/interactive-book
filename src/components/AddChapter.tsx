import { Box, Button, createStyles, makeStyles, Theme, Typography, Link } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Observer } from 'mobx-react';
import { AddChapterDialog } from './AddChapterDialog';
import { Link as RouterLink } from 'react-router-dom';
import { StoreContext } from '../store';

const useAddChapterStyles = makeStyles((theme: Theme) =>
createStyles({
  loginTips: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      color: theme.palette.grey[400],
  }
})
);

export const AddChapter = ({ onSubmit }: {
  onSubmit: (arg: {
      content: string[];
      title: string;
  }) => Promise<void>;
}) => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const store = useContext(StoreContext);
  const classes = useAddChapterStyles();

  return <Observer>
      {() => <>
          {store.isLogin ? <>
              <Button onClick={() => setOpenAddDialog(true)} fullWidth variant="outlined">创作剧情</Button>
              <AddChapterDialog
                  titleLabel="标题"
                  dialogTitle="添加章节"
                  contentPlaceHolder="本章内容..."
                  open={openAddDialog}
                  handleClose={() => setOpenAddDialog(false)}
                  onSubmit={onSubmit} />
          </> :
          <Box className={classes.loginTips}>
              <Typography variant="caption">
                  快去<Link to="/login" component={RouterLink}>登录</Link>开始自己对本章的创作吧～
              </Typography>
          </Box>}
      </>}
  </Observer>;
}
