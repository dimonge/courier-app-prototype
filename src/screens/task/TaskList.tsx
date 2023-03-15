import React from "react"
import { FlatList } from "native-base"

import TaskItem from "./TaskItem"

import data from "../../fixtures/tasks.json"

export const TaskListScreen = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <TaskItem item={item} />
      }}
    />
  )
}
