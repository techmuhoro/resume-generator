import { useState } from 'react';

export default function localStrorage(key: string) {
    const getItems = () => {
        let items: any[];
        let itemsString: string | null;
        if (typeof window !== undefined) {
            itemsString = window.localStorage.getItem(key);
            items = itemsString ? JSON.parse(itemsString) : [];
            return items;
        } else {
            return [];
        }
    };

    const setItems = (items: any[]) => {
        const itemsString = JSON.stringify(items);

        if (typeof window !== undefined) {
            window.localStorage.setItem(key, itemsString);
        }
    };

    const addNewItem = (item: any) => {
        const items = getItems();
        if (items) {
            items.push(item);
        }

        setItems(items);
    };

    const removeItem = (id: string) => {
        console.log('hit', id);
        if (id) {
            const items = getItems();
            let newItems = items.slice(0);
            newItems = newItems.filter(item => item.id !== id);

            setItems(newItems);
        }
    };

    const items = getItems();

    // const items = [{ name: 'James', age: '22' }];

    return { items, addNewItem, removeItem };
}
