/* eslint-disable default-case */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import "../../../App.css";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import axios from "axios";
import { store } from "react-notifications-component";
const TableDashboards = (props) => {
    const [state, setState] = useState([]);
    const [roles, setRoles] = useState([]);
    const [userNames, setUserNames] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getDashboards() {
            axios
                .get(`/api/dashboard/user/${props.UserCredentials[0].id}`)
                .then((res) => {
                    setState(res.data.data.dashboard.rows);
                });
        }
        async function getRoles() {
            await axios
                .get(`/api/role/`)
                .then((res) => {
                    setRoles(res.data.data.roles.rows);
                })
                .catch((error) => {
                    return <Redirect to="/accessdenied" />;
                });
        }
        async function getUsersName() {
            await axios
                .get(`/api/users/`)
                .then((res) => {
                    setUserNames(res.data.data.users.rows);
                })
                .catch((error) => {
                    return <Redirect to="/" />;
                });
        }
        getDashboards();
        getRoles();
        getUsersName();
    }, []);

    const updateData = () => {
        axios
            .get(`/api/dashboard/user/${props.UserCredentials[0].id}`)
            .then((res) => {
                setState(res.data.data.dashboard.rows);
            });
    };

    if (!props.UserCredentials[0]) {
        return <Redirect to="/login" />;
    }

    state.map((dashboard) => {
        roles.map((r) => {
            if (r.id === dashboard.roleId) {
                dashboard.roleId = r.name;
            }
        });

        userNames.map((n) => {
            if (n.id === dashboard.userId) {
                dashboard.userId = n.name;
            }
        });

        dashboard.enable = dashboard.enable ? "Так" : "Ні";
    });

    const columns = [
        { title: "Id", field: "id" },
        { title: "Ативний", field: "enable" },
        { title: "Роль", field: "roleId" },
        { title: "Користувач", field: "userId" },
        { title: "Кількість віджетів", field: "widget_data.length" },
    ];

    return (
        <>
            <div>
                <MaterialTable
                    title="Таблиця дашбордів"
                    data={state}
                    columns={columns}
                    localization={{
                        pagination: {
                            labelDisplayedRows: "{from}-{to} з {count}",
                            labelRowsSelect: "Рядків",
                        },
                        header: {
                            actions: "Дії",
                        },
                        body: {
                            emptyDataSourceMessage: "Немає записів",
                            filterRow: {
                                filterTooltip: "Фільтр",
                            },
                        },
                    }}
                    options={{
                        search: true,
                        filtering: true,
                        exportButton: true,
                        selection: false,
                        paging: true,
                        actionsColumnIndex: -1,
                    }}
                    actions={[
                        {
                            icon: OpenInNewIcon,
                            iconProps: { style: { color: "black" } },
                            tooltip: "Відрити в редакторі",
                            onClick: (event, rowData) => {
                                history.push(`/dashboard/?id=${rowData.id}`);
                            },
                        },
                        {
                            icon: "edit",
                            iconProps: { style: { color: "blue" } },
                            tooltip: "Редагувати",
                            onClick: (event, rowData) => {
                                history.push(`/edit/dashboard/?id=${rowData.id}`);
                            },
                        },
                        {
                            icon: "clear",
                            iconProps: { style: { color: "red" } },
                            tooltip: "Видалити",
                            onClick: (event, rowData) => {
                                axios
                                    .delete(`/api/dashboard/${rowData.id}`)
                                    .then((res) => {
                                        console.log(res);
                                        store.addNotification({
                                            title: "Чудово!",
                                            message: "Успішно видалено",
                                            type: "success",
                                            insert: "top",
                                            container: "top-right",
                                            animationIn: ["animate__animated", "animate__fadeIn"],
                                            animationOut: ["animate__animated", "animate__fadeOut"],
                                            dismiss: {
                                                duration: 2000,
                                                onScreen: true,
                                            },
                                        });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                        store.addNotification({
                                            title: "Помилка!",
                                            message: "Щось пішло не так..",
                                            type: "danger",
                                            insert: "top",
                                            container: "top-right",
                                            animationIn: ["animate__animated", "animate__fadeIn"],
                                            animationOut: ["animate__animated", "animate__fadeOut"],
                                            dismiss: {
                                                duration: 2000,
                                                onScreen: true,
                                            },
                                        });
                                        history.push("/accessdenied");
                                    });
                            },
                        },
                    ]}
                />
            </div>
            <div style={{ justifyContent: "center", display: "flex" }}>
                <Link className="btn btn-success btn-grid" to="/create/dashboard/">
                    Додати дашборд
                </Link>
                <button className="btn btn-primary btn-grid" onClick={updateData}>
                    Створити віджет
                </button>
                <button
                    className="btn btn-warning btn-grid"
                    onClick={() => (
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemText primary="Відео" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Текст" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Карта" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Таблиця користувачів" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Таблиця ролей" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Таблиця дашбордів" />
                            </ListItem>
                        </List>
                    )}
                >
                    Оновити дані
                </button>
            </div>
        </>
    );
};

export default TableDashboards;
