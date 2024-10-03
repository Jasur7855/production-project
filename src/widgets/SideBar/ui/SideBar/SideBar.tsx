import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import cls from "./SideBar.module.scss"
import { useState } from 'react';

interface SideBarProps {
  className?: string
}

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed]=useState(false);
    const onToggle=()=>{
        setCollapsed(prev => !prev)
    }
  return (
    <div className={classNames(cls.SideBar, {[cls.collapsed]:collapsed}, [className])}>
        <button onClick={onToggle}>toggle</button>
        <div className={cls.switchers}>
            <ThemeSwitcher/>
        </div>
    </div>
  );
};
