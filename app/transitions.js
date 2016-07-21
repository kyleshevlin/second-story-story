export default function() {
  this.setDefault({
    duration: 650,
  });

  this.transition(
    this.fromRoute('index'),
    this.toRoute('chapter-one'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('chapter-one'),
    this.toRoute('chapter-two'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
