import "element-plus/es/components/message/style/css";
import { ElMessage } from "element-plus";

const modal = {
  warning: (mes: string) => {
    ElMessage({
      message: mes,
      type: 'warning'
    })
  },
  success: (mes: string) => {
    ElMessage({
      message: mes,
      type: 'success'
    })
  },
  error: (mes: string) => {
    ElMessage({
      message: mes,
      type: 'error'
    })
  },
}

export default modal;