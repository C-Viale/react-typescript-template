import Model from "core/home/model"
import ViewModel from "core/home/view-model"
import ViewController from "core/home/view-controller"

export default function Home(){
  const model = new Model()
  const viewModel = new ViewModel(model)
  return <ViewController viewModel={viewModel}/>
}