<template>
	<div class="slider-tabs">
		<ul class="slider-tabs__tabs">
			<li v-for="tab in tabs" :class="['slider-tabs__tabs__tab', currentTab && currentTab.start === tab.start ? 'slider-tabs__tabs__tab--active' : '']">
				<a class="slider-tabs__tabs__tab__link" @click.prevent="navigateTo(tab)" href="#">
					{{ tab.name }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "lupus-slider-tabs",
		props: {
			currentIndex : {
				type: Number,
				required: true,
			},
			tabs : {
				type: Array,
				required: true,
				validator: (tabs) => {
					tabs.forEach(tab => {
						if (typeof tab !== 'object') {
							console.error('Tabs must be an array of objects');
							return false;
						}
						if (typeof tab.name !== 'string') {
							console.error('tab name must be a string');
							return false;
						}
						if (typeof tab.start !== 'number') {
							console.error('tab start must be a number');
							return false;
						}
						if (typeof tab.end !== 'number') {
							console.error('tab end must be a number');
							return false;
						}
					});
					return true;
				}
			}
		},
		computed: {
			index () {
				// swipers index starts at 1
				return this.currentIndex -1;
			},
			currentTab () {
				let currentTab = null;
				this.tabs.forEach(tab=>{
					if ( this.index >= tab.start && this.index <= tab.end ) {
						currentTab = tab;
					}
				});
				return currentTab
			}
		},
		methods: {
			navigateTo (tab) {
				this.$emit('navigate', tab.start+1); // +1 because swipers index starts at 1
			}
		}
	}
</script>

<style lang="scss">
	.slider-tabs {
		position: absolute;
		top: 1em;
		right: 0;
		left: 0;
		z-index: 10;
		text-align: center;
		&__tabs {
			list-style: none;
			margin: 0;
			padding: 0;
			&__tab {
				display: inline-block;
				padding: 0.3em 0.8em;
				margin: 0 0.15em 0.11em;
				background: rgba(#000, 0.2);
				&__link {
					color: #333;
					text-decoration: none;
				}
				&--active {
					background: #007aff;
				}
				&--active &__link {
					color: #fff;
				}
			}
		}
	}
</style>