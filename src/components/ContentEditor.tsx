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
        border: (props: any) => `1px solid ${props.error ? theme.palette.error.main : theme.palette.grey[600]}`,
        borderRadius: theme.spacing(1),
        minHeight: theme.spacing(50),
        position: 'relative',
        marginTop: theme.spacing(2),
        '&::before': {
            content: '"内容"',
            position: 'absolute',
            fontSize: theme.typography.body1.fontSize,
            color: (props: any) => props.error ? theme.palette.error.main : theme.palette.grey[600],
            left: 0,
            bottom: `calc(100% + ${theme.spacing(0.5)}px)`,
        },
        '&:focus': {
            borderColor: (props: any) => props.error ? theme.palette.error.main : theme.palette.primary.main,
            '&::before': {
                color: (props: any) => props.error ? theme.palette.error.main : theme.palette.primary.main,
            },
            '&::after': {
                color: (props: any) => props.error ? theme.palette.error.main : theme.palette.primary.main,
            }
        },
        '&::after': {
            content: (props: any) => `"${props.helpText}"`,
            fontSize: theme.typography.caption.fontSize,
            color: (props: any) => props.error ? theme.palette.error.main : theme.palette.grey[600],
            position: 'absolute',
            left: '40px',
            bottom: `calc(100% + ${theme.spacing(0.5)}px)`,
        }
    }
  })
);

export const ContentEditor = ({ value, onChange, error, helpText}: {
    value: string[];
    onChange: (e: string[]) => void;
    error?: boolean;
    helpText?: string;
}) => {
    const classes = useStyles({ error, helpText });
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
