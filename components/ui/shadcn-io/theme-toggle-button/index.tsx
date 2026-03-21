'use client';

import { useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../../button';

interface ThemeOption {
  name: string;
  className: string;
}

const themes: ThemeOption[] = [
  { name: 'Blue', className: '' },
  { name: 'Pink', className: 'pink' },
  { name: 'Green', className: 'green' },
  { name: 'Orange', className: 'orange' },
];

type ThemeSelectorProps = {
  className?: string;
};

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => void;
};

export const useThemeTransition = () => {
  const startTransition = useCallback((updateFn: () => void) => {
    const doc = document as DocumentWithViewTransition;
    if (doc.startViewTransition) {
      doc.startViewTransition(updateFn);
    } else {
      updateFn();
    }
  }, []);
  return { startTransition };
};

export const ThemeSelector = ({ className }: ThemeSelectorProps) => {
  const [activeTheme, setActiveTheme] = useState<ThemeOption>(themes[0]);
  const [collapsed, setCollapsed] = useState(true);
  const { startTransition } = useThemeTransition();

  useEffect(() => {
    const saved = localStorage.getItem('theme-class');
    if (saved) {
      const theme = themes.find(t => t.className === saved);
      if (theme) {
        applyTheme(theme);
      }
    }
  }, []);

  const applyTheme = useCallback((theme: ThemeOption) => {
    const root = document.documentElement;

    themes.forEach(t => {
      if (t.className) root.classList.remove(t.className);
    });

    if (theme.className) root.classList.add(theme.className);

    localStorage.setItem('theme-class', theme.className);
    setActiveTheme(theme);
  }, []);

  const handleThemeClick = (theme: ThemeOption) => {
    startTransition(() => applyTheme(theme));
  };

  const colorMap: Record<string, string> = {
    Blue: '#0B8EFF',
    Pink: '#FF3AA0',
    Green: '#38BD2E',
    Orange: '#FF7A00',
  };

  return (
    <div
      className={cn('flex items-center px-1 py-1 rounded-full', className)}
      style={{ gap: 6, position: 'relative' }}
    >
      <Button
        size="icon"
        variant="outline"
        onClick={() => setCollapsed(!collapsed)}
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          padding: 0,
          minWidth: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          fontSize: 18,
          cursor: 'pointer',
          // borderWidth: 1.5,
          // borderColor: colorMap[activeTheme.name],
        }}
        title="Select Theme"
      >
        🎨
      </Button>

      {!collapsed &&
        themes.map((theme, index) => (
          <Button
            key={theme.name}
            size="icon"
            variant={activeTheme.name === theme.name ? 'secondary' : 'secondary'}
            onClick={() => {
              handleThemeClick(theme);
              setCollapsed(true);
            }}
            style={{
              position: 'absolute',
              left: 60 + index * 36, // spacing from main button
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: `translateX(0)`,
              cursor: 'pointer',
            }}
            title={theme.name}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                backgroundColor: colorMap[theme.name],
                display: 'block',
              }}
            />
          </Button>
        ))}
    </div>
  );
};