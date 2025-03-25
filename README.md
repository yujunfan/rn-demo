这是一个 [**React Native**](https://reactnative.dev) 项目模板，使用 [`@react-native-community/cli`](https://github.com/react-native-community/cli) 引导创建。

# 快速上手

>**注意**：在继续之前，请确保您已完成 [React Native - 环境设置](https://reactnative.dev/docs/environment-setup) 指南中的“创建新应用程序”步骤。

### 启动您的应用程序

#### 对于 Android

```bash
yarn android
```

#### 对于 iOS

```bash
yarn ios
```

### 使用第三方模拟器（可选）
Android Studio自带的模拟器性能较差，建议使用第三方模拟器，如mumu模拟器等。
以mumu模拟器为例：在mumu模拟器中，点击右上角菜单，选择“设置”，勾选“开启本地和远程连接”，重启模拟器。
点击“问题诊断”，查看adb调试端口，默认为16384。
打开终端，连接模拟器，并启动项目在模拟器中运行：
```bash
adb kill-server
adb connect 127.0.0.1:16384
yarn android
```

### 遇到项目启动问题可以先尝试以下方法
1. 首次启动项目建议开启一个稳定的代理
2. 执行 `cd android` 进入android目录，执行 `./gradlew clean` 清理gradle缓存
3. 删除node_modules，重新安装依赖
4. 在模拟器中卸载已安装的应用
5. 使用`yarn start --reset-cache` 启动项目

## 项目目录结构

```
/rn_template
├── android                     # Android 项目文件
│   ├── app                     # Android 应用程序模块
│   │   ├── build.gradle        # 应用程序级别的 Gradle 构建文件
│   │   ├── src                 # 源代码目录
│   │   └── ...                 # 其他 Android 项目文件
│   ├── build.gradle            # 项目级别的 Gradle 构建文件
│   ├── gradle.properties       # Gradle 配置文件
│   └── ...                     # 其他 Android 项目文件
├── ios                         # iOS 项目文件
│   ├── rn_template             # iOS 应用程序模块
│   │   ├── Info.plist          # iOS 应用程序配置文件
│   │   ├── AppDelegate.mm      # iOS 应用程序入口文件
│   │   └── ...                 # 其他 iOS 项目文件
│   └── Podfile                 # CocoaPods 配置文件
├── src                         # 源代码目录
│   ├── components              # React Native 组件
│   ├── screens                 # 应用程序屏幕
│   ├── services                # 服务和 API 请求
│   ├── utils                   # 工具函数
│   └── ...                     # 其他源代码文件
├── .gitignore                  # Git 忽略文件
├── app.json                    # 应用程序配置文件
├── babel.config.js             # Babel 配置文件
├── index.js                    # 应用程序入口文件
├── jest.config.js              # Jest 测试配置文件
├── metro.config.js             # Metro 打包配置文件
├── package.json                # 项目依赖和脚本
└── tsconfig.json               # TypeScript 配置文件
```

### 项目中主要用到的一些库
- [React Native Navigation](https://reactnavigation.org/docs/getting-started) 路由库
- [React Native Paper](https://callstack.github.io/react-native-paper/docs/components/ActivityIndicator) UI组件库
- [react-native-xiaoshu](https://24jieqi.github.io/react-native-xiaoshu/components) 小熟组件库
- [expo modules](https://docs.expo.dev/versions/latest/) expo 库，包含大量常用功能库，基本可实现绝大部分的app功能
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv) 本地存储库
- [@shopify/flash-list](https://github.com/shopify/flash-list) 列表库，（虚拟列表、下拉刷新等等功能）
- [zustand](https://zustand.docs.pmnd.rs/) 状态管理库，对标vue的pinia
大多数工具库可以跟react-web项目一样使用，如ahooks、lodash-es、dayjs等

### 调试工具
- 查看布局和log信息或者打断点调试可以在metro窗口中按<kbd>J</kbd>键打开官方调试工具（暂时不支持查看网络请求，官方表示后续会陆续支持并增加更多功能）
- [Reactotron](https://github.com/infinitered/reactotron)调试工具。（支持查看网络请求）
- Android：如果您使用的是 Android 设备或模拟器，请运行以下命令以确保它可以连接到 Reactotron：
- adb reverse tcp:9090 tcp:9090

### 开发相关
#### 屏幕适配
一般对于竖屏手机设备无需进行适配，在特殊场景才需要进行适配。
模板以375*812设计图为基准（让ui以这个尺寸进行设计）。设计到ui的px值，使用component中导出的`pTx`、`pTd`、`fsx`方法进行适配。
- `pTx`：以宽度为基准进行适配，如 width: pTx(100), height: pTx(100) 
- `pTd`：以高度为基准进行适配。（一般不考虑使用，一般横屏时使用，或者要求在不同设备高度上按同比例显示时使用）
- `fsx`：字体大小适配，如 fontSize: fsx(14)

#### 如何快速定位一个页面文件？
打开`/src/types/navigation.d.ts`文件，里面包含了所有路由的类型定义。找到对应的页面key，进入到`/src/navigation/index.tsx`或`/src/screens/Home/index.tsx`中进行定位。

#### 增加一个新页面的步骤
首先在`/src/types/navigation.d.ts`文件定义路由，然后再`/src/screens`中创建对应页面的文件夹和页面文件，最后在`/src/navigation/index.tsx`或`/src/screens/Home/index.tsx`中增加对应的路由。

### 未完待续
