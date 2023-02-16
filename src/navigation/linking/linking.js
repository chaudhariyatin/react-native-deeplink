const config = {
  screens: {
    Main: {
      path: 'Main',
      initialRouteName: 'Home',
      screens: {
        Home: {
          path: 'Home',
          initialRouteName: 'Home',
          screens: {},
        },
        Profile: {
          path: 'Profile',
          initialRouteName: 'Profile',
          screens: {
            Settings: 'Settings',
          },
        },
      },
    },
    Feed: 'Feed',
  },
};

const linking = {
  prefixes: ['deeplink://app', 'https://www.example.com'],
  config,
};

export default linking;

// adb command for debug

// adb shell am start -W -a android.intent.action.VIEW -d "deeplink://app/Main/Profile/Settings" com.deeplink

//adb shell am start -W -a android.intent.action.VIEW -d "https://www.example.com/Main/Profile/Settings" com.deeplink

//ios
//xcrun simctl openurl booted "deeplink://app/Main/Profile/Settings"
