      $transferedTask = TaskTransfer::where('task_id', $task->id)->where('transfer_by', Auth::id())->get();
//        if (count($transferedTask) > 0) {
//            foreach ($assignments as $assign) {
//                TaskTransfer::where('task_id', $task->id)->where('transfer_by', Auth::id())->update(['transfer_to' => $assign]);
//                TaskAssignment::where('task_id', $task->id)->where('assigned_by', Auth::id())->update(['assigned_to' => $assign]);
//                TaskAssignmentLog::create([
//                    'assigned_by' => Auth::id(),
//                    'assigned_to' => $assign,
//                    'task_id' => $task->id,
//                    'is_creator' => false
//                ]);
//                //Change to active to whom i transferred to
//                TaskAssignment::where('task_id', $task->id)->where('assigned_by', Auth::id())->update(['assigned_to' => $assign]);
//                TaskTransferLog::create([
//                    'task_id' => $task->id,
//                    'transfer_by' => Auth::id(),
//                    'transfer_to' => $assign,
//                ]);
//                TaskSubStatusAssignment::create([
//                    'task_id' => $taskId,
//                    'user_id' => $assign,
//                    'sub_status_id' => 1 // SUB STATUS - new (NW)
//                ]);
//                TaskStatus::where('task_id', $task->id)->where('user_id', $transferedTask->transfer_to)->update(['user_id' => $assign]);
//
//            }
//        }

        if (count($transferedTask) < 1) {
            foreach ($assignments as $assign) {
                $taskTransfer = TaskTransfer::create([
                    'task_id' => $task->id,
                    'transfer_by' => Auth::id(),
                    'transfer_to' => $assign,
                    'oversee' => $request->input('oversee')
                ]);

                TaskAssignment::create([
                    'assigned_by' => Auth::id(),
                    'assigned_to' => $assign,
                    'task_id' => $task->id,
                    'is_creator' => false
                ]);
                TaskAssignmentLog::create([
                    'assigned_by' => Auth::id(),
                    'assigned_to' => $assign,
                    'task_id' => $task->id,
                    'is_creator' => false
                ]);

                //Change to active to whom i transferred to
                TaskStatus::create([
                    'task_id' => $task->id,
                    'user_id' => $assign,
                    'status_id' => 3, //change hardcoded to something dynamic, was: $statusIdForTaskSubject
                    'start_time' => $task->start_time,
                    'end_time' => $task->end_time,
                ]);

                TaskTransferLog::create([
                    'task_id' => $task->id,
                    'transfer_by' => Auth::id(),
                    'transfer_to' => $assign,
                ]);

                TaskSubStatusAssignment::create([
                    'task_id' => $taskId,
                    'user_id' => $assign,
                    'sub_status_id' => 1 // SUB STATUS - new (NW)
                ]);

            }

        }
