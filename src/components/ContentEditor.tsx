import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
        ...theme.typography.body1,
        minHeight: '1.5rem',
        textIndent: theme.spacing(4),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    container: {
        outline: 'none',
        border: `1px solid ${theme.palette.grey[600]}`,
        borderRadius: theme.spacing(1),
        minHeight: theme.spacing(50),
        position: 'relative',
        marginTop: theme.spacing(2),
        '&::before': {
            content: '"内容"',
            position: 'absolute',
            fontSize: theme.typography.body1.fontSize,
            color: theme.palette.grey[600],
            left: 0,
            bottom: `calc(100% + ${theme.spacing(0.5)}px)`,
        },
        '&:focus': {
            borderColor: theme.palette.primary.main,
            '&::before': {
                color: theme.palette.primary.main,
            },
        },
    }
  })
);

export const ContentEditor = ({ value, onChange}: {
    value: string[];
    onChange: (e: string[]) => void;
}) => {
    const classes = useStyles();
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [values1, setValues1] = useState<string[]>([]);
    useEffect(() => {
        setValues1(value);
    }, []);

    function handleInput(event: React.FormEvent<HTMLDivElement>) {
        onChange(
            Array.prototype.map.call((event.target as HTMLDivElement).children, (item: HTMLDivElement) => {
                return item.innerText;
            }) as string[]
        );
    }

    return <div ref={ref} contentEditable={true}
        className={classes.container}
        suppressContentEditableWarning={true} onInput={handleInput}>
        {values1.length === 0 && <Box className={classes.section}></Box>}
        {values1.map(value => <Box className={classes.section}>{value}</Box>)}
    </div>;
}
