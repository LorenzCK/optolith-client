import * as React from "react"
import { List } from "../../../Data/List"
import { Maybe } from "../../../Data/Maybe"
import { Record } from "../../../Data/Record"
import { ActivatableDeactivationOptions } from "../../Models/Actions/ActivatableDeactivationOptions"
import { EntryRating } from "../../Models/Hero/heroTypeHelpers"
import { ActiveActivatable } from "../../Models/View/ActiveActivatable"
import { StaticDataRecord } from "../../Models/Wiki/WikiModel"
import { ActivatableRemoveList } from "../Activatable/ActivatableRemoveList"

export interface ActiveListProps {
  filterText: string
  list: Maybe<List<Record<ActiveActivatable>>>
  staticData: StaticDataRecord
  rating: Maybe<StrMap<EntryRating>>
  showRating: boolean
  isRemovingEnabled: boolean
  selectedForInfo: Maybe<string>
  removeFromList (args: Record<ActivatableDeactivationOptions>): void
  setLevel (id: string, index: number, level: number): void
  selectForInfo (id: string): void
}

export const ActiveList: React.FC<ActiveListProps> = props => {
  const {
    filterText,
    list,
    staticData,
    rating,
    showRating,
    isRemovingEnabled,
    selectedForInfo,
    removeFromList,
    setLevel,
    selectForInfo,
  } = props

  return (
    <ActivatableRemoveList
      filterText={filterText}
      list={list}
      staticData={staticData}
      rating={rating}
      showRating={showRating}
      isRemovingEnabled={isRemovingEnabled}
      selectedForInfo={selectedForInfo}
      removeFromList={removeFromList}
      setLevel={setLevel}
      selectForInfo={selectForInfo}
      hideGroup
      />
  )
}
