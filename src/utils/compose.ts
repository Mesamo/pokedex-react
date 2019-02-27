import React from 'react';

type RC<P> = React.FC<P> | React.ComponentClass<P>;

type HOC<O, P> = (component: RC<O>) => RC<O & P>;

export default function compose<P>(): HOC<P, P>;
export default function compose<P, T1>(hoc1: HOC<P, T1>): HOC<P, T1>;
export default function compose<P, T1, T2>(
  hoc1: HOC<P, T1>,
  hoc2: HOC<T1, T2>
): HOC<P, T1 & T2>;
export default function compose<P, T1, T2, T3>(
  hoc1: HOC<P, T1>,
  hoc2: HOC<T1, T2>,
  hoc3: HOC<T2, T3>
): HOC<P, T1 & T2 & T3>;
export default function compose<P, T1, T2, T3, T4>(
  hoc1: HOC<P, T1>,
  hoc2: HOC<T1, T2>,
  hoc3: HOC<T2, T3>,
  hoc4: HOC<T3, T4>
): HOC<P, T1 & T2 & T3 & T4>;
export default function compose<P, T1, T2, T3, T4, T5>(
  hoc1: HOC<P, T1>,
  hoc2: HOC<T1, T2>,
  hoc3: HOC<T2, T3>,
  hoc4: HOC<T3, T4>,
  hoc5: HOC<T4, T5>
): HOC<P, T1 & T2 & T3 & T4 & T5>;
export default function compose(...hocs: HOC<any, any>[]): HOC<any, any> {
  if (hocs.length === 1) {
    return hocs[0];
  }

  return hocs.reduce((prev, next) => component => prev(next(component)));
}
