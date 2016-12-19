import CultureStore from '../../stores/CultureStore';
import Dropdown from '../../components/Dropdown';
import { filterAndSort } from '../../utils/ListUtils';
import RadioButtonGroup from '../../components/RadioButtonGroup';
import React, { Component, PropTypes } from 'react';
import ProfessionActions from '../../actions/ProfessionActions';
import ProfessionsListItem from './ProfessionsListItem';
import ProfessionStore from '../../stores/ProfessionStore';
import ProfessionVariantActions from '../../actions/ProfessionVariantActions';
import ProfessionVariantStore from '../../stores/ProfessionVariantStore';
import ProfileStore from '../../stores/ProfileStore';
import Scroll from '../../components/Scroll';
import Selections from './Selections';
import TextField from '../../components/TextField';

export default class Professions extends Component {

	static propTypes = {
		changeTab: PropTypes.func
	};

	state = {
		professions: ProfessionStore.getAll(),
		currentID: ProfessionStore.getCurrentID(),
		filterText: ProfessionStore.getFilter(),
		sortOrder: ProfessionStore.getSortOrder(),
		showAllProfessions: ProfessionStore.areAllVisible(),
		currentVID: ProfessionVariantStore.getCurrentID(),
		showAddSlidein: false
	};
	
	_updateProfessionStore = () => this.setState({
		professions: ProfessionStore.getAll(),
		currentID: ProfessionStore.getCurrentID(),
		filterText: ProfessionStore.getFilter(),
		sortOrder: ProfessionStore.getSortOrder(),
		showAllProfessions: ProfessionStore.areAllVisible()
	});
	_updateProfessionVariantStore = () => this.setState({
		currentVID: ProfessionVariantStore.getCurrentID()
	});

	filter = event => ProfessionActions.filter(event.target.value);
	sort = option => ProfessionActions.sort(option);
	changeView = view => ProfessionActions.changeView(view);
	showAddSlidein = () => this.setState({ showAddSlidein: true });
	hideAddSlidein = () => this.setState({ showAddSlidein: false });

	selectProfessionVariant = id => ProfessionVariantActions.selectProfessionVariant(id);
	
	componentDidMount() {
		ProfessionStore.addChangeListener(this._updateProfessionStore);
		ProfessionVariantStore.addChangeListener(this._updateProfessionVariantStore);
	}
	
	componentWillUnmount() {
		ProfessionStore.removeChangeListener(this._updateProfessionStore);
		ProfessionVariantStore.removeChangeListener(this._updateProfessionVariantStore);
	}

	render() {

		const { currentID, currentVID, filterText, professions, showAddSlidein, showAllProfessions, sortOrder } = this.state;
		
		const currentCulture = CultureStore.getCurrent();

		const sex = ProfileStore.getSex();

		const list = filterAndSort(professions.filter(e => showAllProfessions || currentCulture.typ_prof.includes(e.id) || e.id === 'P_0'), filterText, sortOrder, sex);

		return (
			<div className="page" id="professions">
				{
					showAddSlidein ? <Selections close={this.hideAddSlidein} /> : null
				}
				<div className="options">
					<TextField hint="Suchen" value={filterText} onChange={this.filter} fullWidth />
					<Dropdown
						value={showAllProfessions}
						onChange={this.changeView}
						options={[['Alle Professionen', true], ['Übliche Professionen', false]]}
						fullWidth />
					<RadioButtonGroup active={sortOrder} onClick={this.sort} array={[
						{
							name: 'Alphabetisch',
							value: 'name'
						},
						{
							name: 'Nach Kosten',
							value: 'cost'
						}
					]} />
				</div>
				<Scroll className="list professions">
					<ul>
						{
							list.map(profession => <ProfessionsListItem
								key={profession.id}
								showAddSlidein={this.showAddSlidein}
								currentID={currentID}
								currentVID={currentVID}
								profession={profession}
								sex={sex}
								/>
							)
						}
					</ul>
				</Scroll>
			</div>
		);
	}
}