## React-Native-Intro
Demo app for "Introduction to React Native" talk

### What can you learn from this
- Basic React Native
- Calling Java method with Native Module
- Build APK

### Requirement
- node 
- react-native-cli
- watchman (optional)

### Install React Native
```
npm install -g react-native-cli
```

### Install Watchman
#### OSX
```
brew install watchman
```

#### LINUX
```
git clone https://github.com/facebook/watchman.git
cd watchman
./autogen.sh
./configure
make
sudo make install
```

### Run
```
npm install
react-native run-android
```

### Build APK
```
cd android
./gradlew clean assembleRelease
```

### License
[MIT](https://raw.githubusercontent.com/esafirm/React-Native-Intro/master/LICENSE)



