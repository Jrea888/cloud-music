// 全局类型声明入口文件
// 这个文件会自动被 TypeScript 包含，无需在其他文件中引用

// 通用工具类型
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Recordable<T = any> = Record<string, T>;

// 事件处理类型
export type EventHandler<T = Event> = (event: T) => void;
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>;

// 组件通用 props 类型
export interface BaseProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

// 异步状态类型
export interface AsyncState<T = any> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

// API 响应类型（可以根据后端接口调整）
export interface ApiResponse<T = any> {
    code: number;
    message: string;
    data: T;
}
