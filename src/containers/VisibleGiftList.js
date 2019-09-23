import { connect } from 'react-redux'
import { toggleGift} from '../actions'
import GiftList from '../components/GiftList'
import { VisibilityFilters } from '../actions'

const getVisibleGifts = (gifts, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return gifts
    case VisibilityFilters.SHOW_COMPLETED:
      return gifts.filter(gift => gift.given)
    case VisibilityFilters.SHOW_ACTIVE:
      return gifts.filter(gift => !gift.given)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  gifts: getVisibleGifts(state.gifts, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleGift: id => dispatch(toggleGift(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftList)
