export default function ToDo({task, isdone, time=0}) {
  return isdone ?
    <li>Task:{task} Time:{time}</li>
    : <li>not done:{task}</li>
}