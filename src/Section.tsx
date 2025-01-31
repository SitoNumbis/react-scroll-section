import React, { useMemo, useContext } from 'react';
import { ScrollContext } from './context';

type Props = {
  id: string;
  meta?: unknown;
  children: React.ReactNode;
} & React.HTMLProps<HTMLButtonElement>;

export const Section = ({ id, children, meta, ...rest }: Props) => {
  const { registerRef } = useContext(ScrollContext);
  const ref = useMemo(() => registerRef({ id, meta }), [id]);

  return (
    <section {...rest} ref={ref} id={id}>
      {children}
    </section>
  );
};
