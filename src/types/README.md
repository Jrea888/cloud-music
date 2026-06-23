# 类型声明文件组织说明

## 文件结构

```
src/types/
├── index.d.ts          # 全局通用类型声明
├── css.d.ts            # CSS 文件类型声明
├── less.d.ts           # LESS 文件类型声明
├── third-party.d.ts    # 第三方 CSS 包类型声明
└── README.md           # 本说明文件
```

## 类型声明优先级

TypeScript 会按以下顺序查找类型声明：

1. **react-scripts 内置声明**（`react-app-env.d.ts` 引用）
   - `*.module.css` - CSS 模块
   - `*.module.scss` - SCSS 模块
   - `*.module.sass` - SASS 模块

2. **项目自定义声明**（`src/types/` 目录）
   - `*.css` - 普通 CSS 文件
   - `*.less` - LESS 文件
   - `*.module.less` - LESS 模块
   - 第三方 CSS 包声明

## 使用方式

### 1. CSS 模块导入（推荐）
```typescript
import styles from './Button.module.css';
// 或
import styles from './Button.module.less';

// 使用
<button className={styles.button}>Click me</button>
```

### 2. 普通 CSS/LESS 文件导入（副作用导入）
```typescript
import './global.css';
import './theme.less';
// 或第三方包
import 'normalize.css';
```

### 3. 添加新的第三方 CSS 包声明

编辑 `third-party.d.ts` 文件：
```typescript
// 新增第三方包声明
declare module 'some-css-package';
```

### 4. 添加新的 CSS 预处理器支持

创建新的类型声明文件，例如 `scss.d.ts`：
```typescript
// SCSS 文件类型声明
declare module '*.scss';

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
```

## 注意事项

1. **避免重复声明**：`react-scripts` 已经声明了 `*.module.css`、`*.module.scss`、`*.module.sass`，无需重复声明
2. **副作用导入 vs 模块导入**：
   - 副作用导入：`import './style.css'`（无导出值）
   - 模块导入：`import styles from './style.module.css'`（导出类名映射）
3. **类型声明文件扩展名**：必须是 `.d.ts` 或 `.ts`
4. **自动包含**：`tsconfig.json` 中已配置包含 `src/types` 目录

## 最佳实践

1. **优先使用 CSS 模块**：避免全局样式冲突
2. **命名规范**：CSS 模块文件使用 `*.module.css` 或 `*.module.less`
3. **类型声明集中管理**：所有类型声明放在 `src/types/` 目录
4. **及时更新**：添加新的 CSS 包时，同步更新 `third-party.d.ts`

## 相关配置

- `tsconfig.json`：包含 `src/types` 目录
- `react-app-env.d.ts`：引用 `react-scripts` 内置类型
