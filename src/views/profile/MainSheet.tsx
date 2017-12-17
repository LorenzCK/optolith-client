import * as React from 'react';
import { BorderButton } from '../../components/BorderButton';
import { Options } from '../../components/Options';
import { TextBox } from '../../components/TextBox';
import { AdventurePointsState } from '../../reducers/adventurePoints';
import { ProfileState } from '../../reducers/profile';
import * as Data from '../../types/data.d';
import { UIMessages } from '../../types/ui.d';
import * as View from '../../types/view.d';
import * as Wiki from '../../types/wiki';
import { _translate } from '../../utils/I18n';
import { ActivatableTextList } from './ActivatableTextList';
import { MainSheetAttributes } from './MainSheetAttributes';
import { MainSheetPersonalData } from './MainSheetPersonalData';
import { Sheet } from './Sheet';
import { SheetWrapper } from './SheetWrapper';

export interface MainSheetProps {
	advantagesActive: Data.ActiveViewObject[];
	ap: AdventurePointsState;
	attributes: View.Attribute[];
	culture: Wiki.Culture | undefined;
	derivedCharacteristics: Data.SecondaryAttribute[];
	disadvantagesActive: Data.ActiveViewObject[];
	el: Data.ExperienceLevel;
	fatePointsModifier: number;
	generalsaActive: (string | Data.ActiveViewObject)[];
	locale: UIMessages;
	profession: Wiki.Profession | undefined;
	professionVariant: Wiki.ProfessionVariant | undefined;
	profile: ProfileState;
	race: Wiki.Race | undefined;
	printToPDF(): void;
}

export function MainSheet(props: MainSheetProps) {
	const {
		advantagesActive,
		ap,
		attributes,
		culture,
		derivedCharacteristics,
		disadvantagesActive,
		el,
		fatePointsModifier,
		generalsaActive,
		profession,
		professionVariant,
		profile,
		locale,
		printToPDF,
		race
	} = props;
	return (
		<SheetWrapper>
			<Options>
				<BorderButton
					className="print-document"
					label={_translate(locale, 'charactersheet.actions.printtopdf')}
					onClick={() => printToPDF()}
					/>
			</Options>
			<Sheet
				id="main-sheet"
				title={_translate(locale, 'charactersheet.main.title')}
				attributes={attributes}
				locale={locale}
				>
				<MainSheetPersonalData
					ap={ap}
					culture={culture}
					el={el}
					eyecolorTags={_translate(locale, 'eyecolors')}
					haircolorTags={_translate(locale, 'haircolors')}
					locale={locale}
					profession={profession}
					professionVariant={professionVariant}
					profile={profile}
					race={race}
					socialstatusTags={_translate(locale, 'socialstatus')}
					/>
				<div className="lower">
					<div className="lists">
						<TextBox className="activatable-list" label={_translate(locale, 'charactersheet.main.advantages')}>
							<ActivatableTextList list={advantagesActive} locale={locale} />
						</TextBox>
						<TextBox className="activatable-list" label={_translate(locale, 'charactersheet.main.disadvantages')}>
							<ActivatableTextList list={disadvantagesActive} locale={locale} />
						</TextBox>
						<TextBox className="activatable-list" label={_translate(locale, 'charactersheet.main.generalspecialabilites')}>
							<ActivatableTextList list={generalsaActive} locale={locale} />
						</TextBox>
					</div>
					<MainSheetAttributes
						attributes={derivedCharacteristics}
						fatePointsModifier={fatePointsModifier}
						locale={locale}
						race={race}
						/>
				</div>
			</Sheet>
		</SheetWrapper>
	);
}
