import {FC} from "react";
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";

const Routing: FC = () => useRoutes(routes);

export default Routing;
