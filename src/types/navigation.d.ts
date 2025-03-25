import {NavigatorScreenParams, CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
declare global {
  /** 根路由下路由 */
  type RootStackParamList = {
    /** 底部Tab路由 */
    Home: NavigatorScreenParams<HomeTabsParamList>;
    /** 详情页 */
    Detail: undefined;
    /** 登录页 */
    Login: undefined;
    /** 开始一次考核流程 */
    StartExamProcess: {examItem: API.SportExam};
    /** 长跑创建考核流程 */
    LongRunStartExamProcess: {examItem: API.SportExam};
    /** 长跑创建考核流程 - 选择班级 */
    LongRunSelectClasses: undefined;
    /** 长跑创建考核流程 - 选择设备 */
    LongRunSelectMachine: undefined;
    /** 长跑考核队列 */
    LongRunQueue: {examItem: API.SportExam};
    /** 考试中 */
    Examming: undefined;
    /** 考核成绩判定 */
    ExamJudgment: {record: API.SportExam};
    /** 档案详情 */
    ArchivesDetail: {classInfo: Archive.ClassArchive; tab?: number};
    /** 学生档案 */
    StudentArchive: {studentInfo: Archive.Student; params?: any};
    /** 更多筛选 */
    MoreFilterScreen: {studentInfo: Archive.Student; params?: any};
    /** 成绩分析 */
    ScoreAnalysis: {testId: string; params?: any};
    /** 编辑学生 */
    EditStudent: {studentInfo: Archive.Student; params?: any};
    /** 搜索 */
    Search: {studentInfo: Archive.Student; params?: any};
    /** 人脸录入 */
    Facedetect: {studentInfo: Archive.Student; params?: any};
    /** 50米跑过程性评价 */
    Run50Analysis: {testId: string; params?: any};
    /** 设备详情 */
    DeviceDetail: {
      id: string;
    };
    /** 测试分析 */
    ExamAnalysis: {id: string; record: API.SportExamRecord};
    /** 分组列表 */
    GroupList: undefined;
    /** 跑步进度 */
    RunProgress?: { from?: string, status?: string };
    /** 长跑进度 */
    LongRunProgress: undefined;
    /** 设备配置 */
    DeviceConfig: undefined;
    /** 测试进度 */
    TestProgress?: { from?: string ,status?: string};
    /** 我的课表 */
    Schedule: undefined;
    /** 新增课程 */
    AddCourse: {courseData: any};
    /** 课程分析 */
    CourseAnalysis: {courseInfo: any};
    /** 课堂详情 */
    ClassroomDetail: {courseInfo: API.TodayCourseListItem};
    /** 批量录入人脸 */
    BatchFaceEnter: {classId: string; studentId?: string};
    /** 调试用页面 */
    Test: undefined;
  };

  /** 根路由下子路由Screen类型 */
  type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    T
  >;

  /** Home页面下路由 */
  type HomeTabsParamList = {
    /** 首页 */
    Dashboard: undefined;
    /** 记录 */
    Record?: {from?: string};
    /** 我的 */
    Profile: undefined;
    /** 定位demo */
    Location: undefined;

    /** 档案 */
    Archives: undefined;
    /** 设备 */
    Device: undefined;
    /** 课程 */
    Course: undefined;
  };

  /** Home下子路由Screen类型 */
  type HomeStackScreenProps<T extends keyof HomeTabsParamList> = CompositeScreenProps<
    DrawerScreenProps<HomeTabsParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

  namespace ReactNavigation {
    /** Specifying default types for useNavigation, Link, ref etc */
    interface RootParamList extends RootStackParamList {}
  }
}
