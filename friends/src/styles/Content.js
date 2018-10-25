import styled from 'styled-components';

export const Container = styled.div`
  max-width: 850px;
  width: 100%;
  margin: 100px auto;

`;

export const FormWrapper = styled.div`
  border: 1px solid #dddfe2;
  border-radius: 5px;
  background-color: #fff;
`;

export const FormHeader = styled.h2`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
  color: #4b4f56;
  font-weight: bold;
  background-color: #f5f6f7;
`;

export const FormGroup = styled.form`
  max-width: 400px;
  width: 100%;
  margin: 20px auto;
`;

export const FormLabel = styled.p`
  padding: 10px 0;
  color: #afb3bb;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const FormInput = styled.input`
  font-size: 1.4rem;
  width: 100%;
  padding: 10px 5px;
  border: 1px solid #bcbec2;
  border-radius: 2px;
`;

export const FormButton = styled.button`
  border: 1px solid #4267b2;
  border-radius: 3px;
  margin-top: 20px;
  width: 35%;
  padding: 10px 0;
  font-size: 1.5rem;
  background-color: #4267b2;
  color: #fff;
  font-weight: bold;
`;

// FriendsList
export const FriendsContainer = styled.div`
  margin-top: 10px;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  background-color: #fff;
`;

export const FriendsWrapper = styled.div`
  max-width: 815px;
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FriendCard = styled.div`
  border: 1px solid #dddfe2;
  border-radius: 2px;
  width: 49%;
  margin: 10px 0px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DeleteButton = styled.button`
  border: 1px solid #ccd0d5;
  border-radius: 3px;
  width: 24%;
  padding: 4px 0;
  font-size: 1.4rem;
  background-color: #f5f6f7;
  color: #4b4f56;
  font-weight: bold;
`;
