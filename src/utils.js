import * as R from "ramda";
import { mapProps } from "recompose";

export const omitProps = R.compose(mapProps, R.omit);
