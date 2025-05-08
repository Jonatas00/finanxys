import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { styles } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.Button} activeOpacity={0.4} {...rest}>
      <Text style={styles.Title}>{title}</Text>
    </TouchableOpacity >
  )
}
