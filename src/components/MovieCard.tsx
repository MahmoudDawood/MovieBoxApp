import React from 'react';
import { Card, Title, Paragraph, IconButton, Text } from 'react-native-paper';
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import specific icon set

const { width: deviceWidth } = Dimensions.get('window');

const MovieCard: React.FC = ({ movie }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <View style={styles.details}>
          <Paragraph style={styles.subtitle}>{'USA, ' + (movie.release_date ? movie.release_date.split('-')[0] : 'N/A')}</Paragraph>
          <Title style={styles.title}>{movie.title}</Title>
          <Paragraph style={styles.ratings}>
              <Icon name="star" size={24} color="yellow" />
              <Text style={styles.ratingText}>{movie.vote_average.toFixed(1) * 10}.0 / 100</Text>
          </Paragraph>
          <Paragraph style={styles.ratings}>
              <Icon name="star" size={24} color="red" />
              <Text style={styles.ratingText}>{movie.vote_average.toFixed(1) * 10}%</Text>
          </Paragraph>
        </View>
        <View style={styles.imageView}>
          <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.image}>
            <Icon.Button
              name="heart"
              size={12}
              style={styles.favoriteIcon}
            />
          </ImageBackground>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  details: {
    flex: 0,
    paddingLeft: 10,
    paddingRight: 30
  },
  imageView: {
    flex: 1,
    width: deviceWidth * 0.3,
  },
  image: {
    width: 100,
    height: 150,
    alignItems: 'flex-end'
  },
  subtitle: {
    width: 150,
    fontSize: 12,
    color: 'grey'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 150,
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    // padding: 10
  },
  leftRating: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  rightRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  ratingText: {
    marginLeft: 3,
    fontSize: 14,
  },
  favoriteIcon: {
    margin: 0,
    backgroundColor: 'red'
  }
});

export default MovieCard;