// LESS 文件类型声明
// 普通 LESS 文件（副作用导入）
declare module '*.less';

// LESS 模块文件
declare module '*.module.less' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
