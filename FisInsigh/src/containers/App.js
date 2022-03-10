import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import loginContainer from './login/loginContainer';
import CourseContainer from './home/course/CourseContainer';
import InsertCourseContainer from './home/course/InsertCourseContainer';
import LessonContainer from './home/lesson/LessonContainer';
import InsertLessonContainer from './home/lesson/InsertLessonContainer';
import SlideMenu from '../components/custom/drawer/DrawerMenu';
import HomeScreen from '../components/home/formTest/InsertTest';
import TestForm from '../components/home/formTest/test'

import { headerStr } from '../res/values/strings/index'
import { Image } from 'react-native'

const TabNavigator = createBottomTabNavigator({
  Course: {
    screen: CourseContainer,
    navigationOptions: {
      tabBarLabel: 'Khóa Học',
      tabBarIcon: ({ tintColor }) => (
        <Image source={headerStr.imgCourse} resizeMode='contain' style={{ width: 28, height: 28 }} />
      )
    }
  },
  Lesson: {
    screen: LessonContainer,
    navigationOptions: {
      tabBarLabel: 'Buổi Học',
      tabBarIcon: ({ tintColor }) => (
        <Image source={headerStr.imgLesson} resizeMode='contain' style={{ width: 28, height: 28 }} />
      )
    }
  },
  Test: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Form'
    }
  },
  TestForm: {
    screen: TestForm,
    navigationOptions: {
      tabBarLabel: 'FormJson'
    }
  }
},
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      }
    }
  });



const HomeStack = createStackNavigator(
  {
    MainScreens: {
      screen: TabNavigator,
    },

    AddCourse: {
      screen: InsertCourseContainer,
    },

    AddLesson: {
      screen: InsertLessonContainer,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  });

const AppDrawer = createDrawerNavigator(
  {
    drawer: { screen: HomeStack }
  },
  {
    contentComponent: SlideMenu,
    drawerWidth: '80%'
  }
)

const MainStack = createStackNavigator(
  {
    Login: {
      screen: loginContainer,
    },

    Home: {
      screen: AppDrawer,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

export default createAppContainer(MainStack);