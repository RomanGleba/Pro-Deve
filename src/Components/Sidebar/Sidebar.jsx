import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Drawer, List, ListItem, ListItemText, Divider, IconButton, Box} from '@mui/material';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChatIcon from '@mui/icons-material/Chat';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import NewsIcon from '@mui/icons-material/Business';
import s from './Sidebar.module.css';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(false); // Стан для відкриття сайдбару

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar); // Зміна стану відкриття сайдбару
    };

    return (
        <div>
            {/* Контейнер для логотипа і кнопки сайдбару */}
            <Box className={s.sidebarHeader}>
                {/* Логотип */}
                <div className={s.logo}>
                    <img
                        src="data:image/png;base64,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"
                        alt="Logo"/> {/* Замість '/path/to/logo.png' вкажіть шлях до вашого логотипа */}
                </div>

                {/* Кнопка для відкриття сайдбару */}
                <IconButton onClick={toggleSidebar} className={s.sidebarButton}>
                    <ViewSidebarIcon/>
                </IconButton>
            </Box>

            {/* Сайдбар */}
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
                variant="temporary" // Використовуємо "temporary" для показу сайдбару при натисканні
                anchor="left"
                open={openSidebar}
                onClose={toggleSidebar}
            >
                <List>
                    {/* Пункт меню для головної сторінки з іконкою */}
                    <ListItem button component={NavLink} to="/Home" activeClassName="active">
                        <HomeIcon /> {/* Іконка для головної */}
                        <ListItemText primary="Home" />
                    </ListItem>
                    <Divider />
                    {/* Пункт меню для профілю з іконкою */}
                    <ListItem button component={NavLink} to="/Profile" activeClassName="active">
                        <AccountBoxIcon /> {/* Іконка для профілю */}
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <Divider />
                    {/* Пункт меню для повідомлень з іконкою */}
                    <ListItem button component={NavLink} to="/Dialogs" activeClassName="active">
                        <ChatIcon /> {/* Іконка для повідомлень */}
                        <ListItemText primary="Messages" />
                    </ListItem>
                    <Divider />
                    {/* Пункт меню для новин з іконкою */}
                    <ListItem button component={NavLink} to="/News" activeClassName="active">
                        <NewsIcon /> {/* Іконка для новин */}
                        <ListItemText primary="News" />
                    </ListItem>
                    <Divider />
                    {/* Пункт меню для музики з іконкою */}
                    <ListItem button component={NavLink} to="/Music" activeClassName="active">
                        <LibraryMusicIcon /> {/* Іконка для музики */}
                        <ListItemText primary="Music" />
                    </ListItem>
                    <Divider />
                    {/* Пункт меню для налаштувань з іконкою */}
                    <ListItem button component={NavLink} to="/Settings" activeClassName="active">
                        <SettingsIcon /> {/* Іконка для налаштувань */}
                        <ListItemText primary="Settings" />
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
        </div>
);
};

export default Sidebar;

