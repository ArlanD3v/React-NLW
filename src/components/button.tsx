interface ButtonProps{
   text?:string
}
export function Button(props: ButtonProps) {
   // biome-ignore lint/a11y/useButtonType: <explanation>
   return <button className="bg-amber-500 px-5 py-2 rounded-lg">{props.text || 'Enviar'}</button>

}