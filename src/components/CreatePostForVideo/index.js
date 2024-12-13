import {
    CreateVideoPostContainer,
    CreateVideoPost,
    ContentContainer,
    Content,
    CreateButton,
} from './styledComponents'

const CreatePostForVideo = () => {
    return (
        <CreateVideoPostContainer>
            <CreateVideoPost src="/public/assets/Menu (3).png" alt="menu-3" />
            <ContentContainer>
                <Content>
                    Surrounded by nature’s beauty, finding peace in every leaf, breeze, and sunset. 🌿🌞 
                    #NatureVibes #OutdoorEscape #EarthLover
                </Content>
            </ContentContainer>
            <CreateButton>CREATE</CreateButton>
        </CreateVideoPostContainer>
    )
}

export default CreatePostForVideo
