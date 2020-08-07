import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { adminRoutes } from './routes';
import Frame from './components/Frame/Index';
import { isLogined } from './utils/auth';
const App = props => {
        return isLogined() ? (
                <Frame>
                        <Switch>
                                {/*<Switch>是唯一的因为它仅仅只会渲染一个路径。相比之下（不使用<Switch>包裹的情况下），每一个被location匹配到的<Route>将都会被渲染 */}
                                {adminRoutes.map(route => {
                                        return (
                                                <Route
                                                        key={route.path}
                                                        path={route.path}
                                                        exact={route.exact}
                                                        render={routeProps => {
                                                                console.log(props);
                                                                console.log(routeProps);
                                                                return <route.component {...routeProps} />;
                                                                {
                                                                        {
                                                                                /*nnd终于理解了，这就是个路由标签包裹的页面，想在页面里面使用props，就需要传递 <route.component {...routeProps} />*/
                                                                        }
                                                                }
                                                        }}
                                                />
                                        );
                                })}
                                {/* admin路由重定向到admin第一个路由 */}
                                <Redirect to={adminRoutes[0].path} from="/admin" />
                                <Redirect to="/404" />
                        </Switch>
                </Frame>
        ) : (
                <Redirect to="/login" />
        );
};

export default App;
