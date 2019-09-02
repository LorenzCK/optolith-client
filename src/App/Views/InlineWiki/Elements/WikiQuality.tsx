import * as React from "react";
import { Record, RecordIBase } from "../../../../Data/Record";
import { L10nRecord } from "../../../Models/Wiki/L10n";
import { translate } from "../../../Utilities/I18n";
import { Markdown } from "../../Universal/Markdown";

interface Accessors<A extends RecordIBase<any>> {
  quality: (r: Record<A>) => string
}

export interface WikiQualityProps<A extends RecordIBase<any>> {
  x: Record<A>
  acc: Accessors<A>
  l10n: L10nRecord
}

export function WikiQuality<A extends RecordIBase<any>> (props: WikiQualityProps<A>) {
  const {
    x,
    acc,
    l10n,
  } = props

  return (
    <Markdown source={`**${translate (l10n) ("quality")}:** ${acc.quality (x)}`} />
  )
}
