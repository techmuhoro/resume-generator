import { FC } from 'react';
import { useTheme } from 'next-themes';

export const Header: FC = () => {
    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <span onClick={() => setTheme('light')}>
                    <i className="fa-solid fa-sun"></i>
                </span>
            );
        } else {
            return (
                <span onClick={() => setTheme('dark')}>
                    <i className="fa-solid fa-moon"></i>
                </span>
            );
        }
    };
    return (
        <div className="border-b border-gray-300 py-4 flex items-center">
            <p className="font-semibold text-2xl w-3/12 text-center">
                Cognet Resumes
            </p>
            <p>{renderThemeChanger()}</p>
        </div>
    );
};
