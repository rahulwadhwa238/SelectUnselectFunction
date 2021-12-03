const [selectedItemList, setSelectedItemList] = useState([])

const selectUnselectItem = (item) => {
        let selectedItems = [...selectedItemList]
        if (selectedItems.find(x => x.id == item.id)) {
            selectedItems = selectedItems.filter(x => x.id != item.id)
        }
        else {
            selectedItems.push(item)
        }
        setSelectedItemList(selectedItems)
}
