import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: ReactNode
}

export interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export interface CardProps {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: any;
    created_at: string;
    updated_at: string;
}