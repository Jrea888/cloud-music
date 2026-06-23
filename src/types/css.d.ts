// CSS 文件类型声明
// 普通 CSS 文件（副作用导入）
declare module '*.css';

// CSS 模块文件
declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
