import { createApp } from 'vue'
import {
  Layout,
  LayoutHeader,
  Menu,
  MenuItem,
  LayoutContent,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Input,
  Button,
  Row,
  Col,
  Divider,
  Radio,
  DatePicker,
  TimePicker,
  Upload,
  Switch,
  List,
  ListItem,
  RadioGroup,
  CheckboxGroup
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import store from './store'

createApp(App)
  .use(store)
  .use(Layout)
  .use(LayoutHeader)
  .use(Menu)
  .use(MenuItem)
  .use(LayoutContent)
  .use(Tabs)
  .use(TabPane)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Button)
  .use(Row)
  .use(Col)
  .use(Divider)
  .use(Radio)
  .use(RadioGroup)
  .use(CheckboxGroup)
  .use(Switch)
  .use(List)
  .use(ListItem)
  .use(DatePicker)
  .use(TimePicker)
  .use(Upload)
  .mount('#app')
